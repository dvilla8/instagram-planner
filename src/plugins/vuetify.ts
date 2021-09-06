import {App} from 'vue'
// @ts-ignore
import { Vuetify, createVuetify } from 'vuetify/dist/vuetify.js'

import 'vuetify/dist/vuetify.min.css';

export function vuetify(app: App) {
    app.use(createVuetify())
}