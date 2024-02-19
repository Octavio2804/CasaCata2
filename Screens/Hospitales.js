import React from 'react'
import { ScrollView, Text, StyleSheet } from 'react-native'

const Hospitales = () => {
  return (
    <ScrollView>
        <Text>Hospitales:</Text>
        <Text>1-Hospital de pediatría Garrahan:
            Dirección: Pichincha 1890. Teléfono Servicio Social: 11 4122 6320 – 11 4122 6321.
            2- Hospital de Niños Dr. Ricardo Gutiérrez
            Dirección: Gallo 1330
            Teléfonos: 4962-9247 / 9248 / 9280 / 9281. Guardia: 4962-9232
            3- HOSPITAL RAMOS MEJÍA:
            DIRECCIÓN: Gral. Urquiza 609 CABA. TELÉFONO: 4931-1884
            4- Hospital El Cruce: 
            DIRECCIÓN: Avenida Calchaquí 5401, Florencio Varela. TELÉFONO: 4219-9000
            5- HOSPITAL POSADAS: 
            Dirección: Av. Pte. Illia s/n, El Palomar, Buenos Aires. Teléfono: (54-11) 4469-9200 / 4469-9300. Correo electrónico:comunicacion@hospitalposadas.gov.ar
        </Text>
    </ScrollView>
  )
}

export default Hospitales