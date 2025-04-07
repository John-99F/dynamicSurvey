export const typesQuestions = {
    1: 'Opción Múltiple',
    2: 'Seleccion Múltiple',
    3: 'Respuesta abierta'
}

export let questions = [
    {   id:100,
        type: typesQuestions[1],
        question: '¿Qué tan satisfecho estás con nuestro servicio general?',
        options: [
          'Muy satisfecho',
          'Satisfecho',
          'Neutral',
          'Insatisfecho',
          'Muy insatisfecho'
        ]
      }, 
      {
        id:101,
        type: typesQuestions[1],
        question: '¿Con qué frecuencia utilizas nuestros servicios?',
        options: [
          'Diariamente',
          'Semanalmente',
          'Mensualmente',
          'Rara vez'
        ]
      },
      {
        id:102,
        type: typesQuestions[2],
        question: '¿Qué aspectos te parecen más útiles de nuestro servicio?',
        options: [
          'Facilidad de uso',
          'Velocidad de respuesta',
          'Atención al cliente',
          'Variedad de funciones',
          'Precio'
        ]
      },
      {
        id:103,
        type:  typesQuestions[2],
        question: '¿Dónde sueles interactuar con nosotros?',
        options: [
          'Sitio web',
          'Aplicación móvil',
          'Redes sociales',
          'Correo electrónico',
          'Teléfono'
        ]
      },
      {
        id:104,
        type:  typesQuestions[3],
        question: '¿Qué mejorarías de nuestro servicio?'
      },
      {
        id:105,
        type: typesQuestions[3],
        question: '¿Qué fue lo que más te gustó de tu experiencia reciente?'
      },
      {
        id:106,
        type: typesQuestions[1],
        question: '¿Qué tan fácil fue navegar por nuestra plataforma?',
        options: [
          'Muy fácil',
          'Fácil',
          'Neutral',
          'Difícil',
          'Muy difícil'
        ]
      },
      {
        id:107,
        type:typesQuestions[1],
        question: '¿Recomendarías nuestro servicio a otras personas?',
        options: [
          'Definitivamente sí',
          'Probablemente sí',
          'No estoy seguro',
          'Probablemente no',
          'Definitivamente no'
        ]
      },
      {
        id:108,
        type: typesQuestions[2],
        question: '¿Qué canales prefieres para recibir actualizaciones o promociones?',
        options: [
          'Correo electrónico',
          'Notificaciones en la app',
          'SMS',
          'Redes sociales',
          'No deseo recibir información'
        ]
      },
      {
        id:109,
        type: typesQuestions[1],
        question: '¿Tu problema fue resuelto en tu última interacción con nosotros?',
        options: [
          'Sí, completamente',
          'Parcialmente',
          'No, aún está pendiente'
        ]
      }  
]

export const respuestas = [
  { id: 100, respuesta: '' },
  { id: 101, respuesta: '' },
  { id: 102, respuesta: [''] },
  { id: 103, respuesta: [''] },
  { id: 104, respuesta: '' },
  { id: 105, respuesta: '' },
  { id: 106, respuesta: '' },
  { id: 107, respuesta: '' },
  { id: 108, respuesta: [''] },
  { id: 109, respuesta: '' },
];