require('dotenv').config();
import admin, { ServiceAccount } from 'firebase-admin';

export const FirebaseHelper = {
    serviceconfig: null as ServiceAccount,
    admin: null as any,
    firestore: null as admin.firestore.Firestore,
    bucket: null as admin.storage.Storage,

    async Connect(configConnect: ServiceAccount | string): Promise<void> {
        this.serviceconfig = configConnect
        admin.initializeApp({
            credential: admin.credential.cert(configConnect),
            databaseURL: process.env.DB_URL,
            storageBucket: process.env.BUCKET_URL,
            projectId: process.env.PROJECT_ID
        })
        this.admin = admin
        this.firestore = admin.firestore()
        this.bucket = admin.storage()
    },

    async Disconnect(): Promise<void> {
        console.log('close connection');
        this.admin = null
    },

    async getFirestore(): Promise<admin.firestore.Firestore> {
        if (!this.admin || !this.admin == null) {
            await this.Connect(this.serviceconfig)
        }
        return this.firestore
    },

    async getStorage(): Promise<admin.storage.Storage> {
        if (!this.admin || !this.admin == null) {
            await this.Connect(this.serviceconfig)
        }
        return this.bucket
    },

    map(accountData: any, id?: string): any {
        const response = {
            id: id,
            ...accountData
        }
        return response;
    }

}