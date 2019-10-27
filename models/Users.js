import mongoose from 'mongoose';
const UserSchema = new mongoose.Schema({
    name: {
        type: string, 
        require: true
    },
    email: {
        type: string,
        required: true,
        unique: true
    },
    password: {
        type: string,
        required: true
    }
});
const user = mongoose.model('user', UserSchema);
export default User;
