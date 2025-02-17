// umlaphi

import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    image: { type: String, default: "data:image/jpeg;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA2NDAgNTEyIj48IS0tISBGb250IEF3ZXNvbWUgRnJlZSA2LjYuMCBieSBAZm9udGF3ZXNvbWUgLSBodHRwczovL2ZvbnRhd2Vzb21lLmNvbSBMaWNlbnNlIC0gaHR0cHM6Ly9mb250YXdlc29tZS5jb20vbGljZW5zZS9mcmVlIChJY29uczogQ0MgQlkgNC4wLCBGb250czogU0lMIE9GTCAxLjEsIENvZGU6IE1JVCBMaWNlbnNlKSBDb3B5cmlnaHQgMjAyNCBGb250aWNvbnMsIEluYy4gLS0+PHBhdGggZD0iTTk2IDEyOGExMjggMTI4IDAgMSAxIDI1NiAwQTEyOCAxMjggMCAxIDEgOTYgMTI4ek0wIDQ4Mi4zQzAgMzgzLjggNzkuOCAzMDQgMTc4LjMgMzA0bDkxLjQgMEMzNjguMiAzMDQgNDQ4IDM4My44IDQ0OCA0ODIuM2MwIDE2LjQtMTMuMyAyOS43LTI5LjcgMjkuN0wyOS43IDUxMkMxMy4zIDUxMiAwIDQ5OC43IDAgNDgyLjN6TTUwNCAzMTJsMC02NC02NCAwYy0xMy4zIDAtMjQtMTAuNy0yNC0yNHMxMC43LTI0IDI0LTI0bDY0IDAgMC02NGMwLTEzLjMgMTAuNy0yNCAyNC0yNHMyNCAxMC43IDI0IDI0bDAgNjQgNjQgMGMxMy4zIDAgMjQgMTAuNyAyNCAyNHMtMTAuNyAyNC0yNCAyNGwtNjQgMCAwIDY0YzAgMTMuMy0xMC43IDI0LTI0IDI0cy0yNC0xMC43LTI0LTI0eiIvPjwvc3ZnPg==" },
    address: { type: Object, default: {line1: '', line2: ''} },
    gender: { type: String, default: 'Not Selected' },
    dob: { type: String, default: 'Not Selected' },
    phone: { type: String, default: '0000000000' },
  },
);

const userModel =
  mongoose.models.user || mongoose.model("user", userSchema);

export default userModel;
