import DatabaseController from "../DatabaseController";
import admin from "firebase-admin";
import config from "../../config";

class FirebaseController extends DatabaseController {
  private db: admin.firestore.Firestore;

  public constructor() {
    super();
    const serviceAccount = config.firebase;
    console.log(serviceAccount);
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    });
    this.db = admin.firestore();
  }

  public async getCollectionData(collectionName: string): Promise<any[]> {
    try {
      const collectionRef = this.db.collection(collectionName);
      const snapshot = await collectionRef.get();
      const data: any[] = [];
      snapshot.forEach((doc) => {
        data.push({ id: doc.id, ...doc.data() });
      });
      return data;
    } catch (error) {
      console.error("Error getting collection data:", error);
      throw error;
    }
  }

  public async getDocumentById(
    collectionName: string,
    docId: string
  ): Promise<any | null> {
    try {
      const docRef = this.db.collection(collectionName).doc(docId);
      const doc = await docRef.get();
      if (doc.exists) {
        return { id: doc.id, ...doc.data() };
      } else {
        console.log("No such document!");
        return null;
      }
    } catch (error) {
      console.error("Error getting document by ID:", error);
      throw error;
    }
  }
}

export default FirebaseController;
