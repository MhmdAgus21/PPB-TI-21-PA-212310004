import { View, Text } from 'react-native'
import React from 'react'

const MyBio = {
    identity: {
        npm: 212310004,
        firstName: 'Muhamad',
        middleName: '-',
        lastName: 'Agus'
    },
    educations: [
        { id: 1, school: 'SDN Bendungan 01' },
        { id: 2, school: 'SMPN 2 Megamendung' },
        { id: 3, school: 'SMAN 1 Ciawi' }],
    mobile_phone: '08389999999',
    email: '212310004@student.ibik.ac.id',
    gender: 'M',
    tall_body: 169,
    weight_body: 55
}

const No4RFC = () => {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <View style={{ borderWidth: 1, padding: 10, width: 300 }}>
                <Text style={{ fontSize: 30, fontWeight: 'bold' }}>No.4 RFC</Text>
                <Text style={{ fontWeight: 'bold' }}>Identity</Text>
                <Text>NPM : {MyBio.identity.npm}</Text>
                <Text>First Name : {MyBio.identity.firstName}</Text>
                <Text>Middle Name : {MyBio.identity.middleName}</Text>
                <Text>Last Name : {MyBio.identity.lastName}</Text>
                <Text style={{ fontWeight: 'bold' }}>Educations</Text>
                {MyBio.educations.map((education) => {
                    return (
                        <Text>{education.id}. {education.school}</Text>
                    )
                })}
                <Text>Mobile Phone : {MyBio.mobile_phone}</Text>
                <Text>Email : {MyBio.email}</Text>
                <Text>Gender : {MyBio.gender}</Text>
                <Text>Tall Body : {MyBio.tall_body}</Text>
                <Text>Weight Body : {MyBio.weight_body}</Text>
            </View>
        </View>
    )
}

export default No4RFC