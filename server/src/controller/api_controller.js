const controller = {};
const json = [{}];

controller.list = (req,resp) =>{
  	resp.json([
  		{
        id:"1",
  			name:"Pedro Algusto",
  			email:"pedro@test.com",
  			age:"25",
  			country:"Mexico",
  			gender:"Man",
  			salary:"26.000"
  		},
  		{
        id:"2",
  			name:"Giovani Saoli",
  			email:"giovani@test.com",
  			age:"30",
  			country:"Mexico",
  			gender:"Man",
  			salary:"22.000"
  		},
  		{
        id:"3",
  			name:"Diana Morales",
  			email:"diana@test.com",
  			age:"20",
  			country:"Guatemala",
  			gender:"Woman",
  			salary:"45.000"
  		},


      {
        id:"4",
        name:"Joao Souza",
        email:"joao@test.com",
        age:"25",
        country:"Brazil",
        gender:"Man",
        salary:"30.000"
      },
      {
        id:"5",
        name:"Camila Scot",
        email:"camila@test.com",
        age:"30",
        country:"Colombia",
        gender:"Woman",
        salary:"40.000"
      },
      {
        id:"6",
        name:"Lina Uster",
        email:"lina@test.com",
        age:"60",
        country:"Colombia",
        gender:"Woman",
        salary:"12.000"
      },






  	] );
};

controller.getGraphicGender = (req,resp)=> {
	resp.send({
      titulo:"Users by gender",
      serie :[{
            name: 'Man',
            y: 3,
            sliced: true,
            selected: true
        }, {
            name: 'Woman',
            y: 1
        }],
        plot: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
              enabled: false
          },
          showInLegend: true
      }});
}

controller.getGraphicCountres = (req,resp)=> {
	resp.json(
      {
    titulo:"Users by countres",
    serie :[{
        name: 'Mexico',
        data: [49.9]

    }, {
        name: 'Guatela',
        data: [83.6]

    }, {
        name: 'Colombia',
        data: [48.9]

    }, {
        name: 'Brazil',
        data: [42.4]

    }],
    categories:[
            'Mexico',
            'Colombia',
            'Brazil',
            'Guatemala'
        ]
  });
}

module.exports = controller;