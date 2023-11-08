const { Kafka} =  require("kafkajs");

export const kafka = new Kafka({
    clientId: 'chatApp',
    brokers : [`${process.env.KAFKA_IP}:${process.env.KAFKA_PORT}`]
})

const run = async()=>{
    const producer = kafka.producer()

    await producer.connect()

    await producer.send({
        topic: 'hello-123',
        messages: [
            { value: 'Kafka initialsed on chat-service' },
        ],
    }).then((res:any)=>{
        console.log('Kafka initialsed on chat-service')
    })
}
run();