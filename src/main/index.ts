require('dotenv').config()
import { ServiceAccount } from 'firebase-admin/lib/credential'
import { FirebaseHelper } from '../infra/database/firebase/helpers'

const keyobjectfirebase: ServiceAccount = {
    "clientEmail": process.env.CLIENTEMAIL,
    "privateKey": process.env.PRIVATEKEY.replace(/\\n/g, '\n'),
    "projectId": process.env.PROJECTID
}

var port = process.env.PORT || 3080;

FirebaseHelper.Connect(keyobjectfirebase)
    .then(async () => {
        const app = (await import('./config/app')).default
        app.listen(port, () => {
            console.log(`Serve is running in port ${port}.`);
        })
    })
.catch(console.error)