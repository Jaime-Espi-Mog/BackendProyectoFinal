const Cita = require ('../models/Cita');

// Función agregar citas

exports.agregarCitas = async(req, res) => {

    try {
      
    let citas; 
    citas = new Cita(req.body);
    await citas.save();
    res.send(citas);     


    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al agregar una cita')
        
    }
}

// Función que nos va a mostrar todas las citas

exports.mostrarCitas = async(req,res) =>{

    try {
        
        const citas = await Cita.find();
        res.json(citas);




    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al mostrar los clientes');
    }

}

// Función para mostrar una cita

exports.buscarCitas = async (req, res) =>{

    try {
        
        let cita = await Cita.findById(req.params.id);

        if(!cita){
            res.status(404).json({msg: 'No se encuentra la cita'});

        }else{
        res.json(cita);
        }

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al consultar la cita')
    }
}

// Función para actualizar una cita

exports.actualizarCitas = async (req, res) =>{
  try {
    const cita = await Cita.findOneAndUpdate(
        {_id: req.params.id },req.body);

        if (!cita) res.status(404).send("cita no encontrada");
        else
        res.json(cita);
    
  } catch (error) {
    console.log(error);
    res.status(500).send("Hubo un error al actualizar la cita")
  }
};


// Función para modificar un cliente

exports.modificarCitas = async(req, res) => {

    try {
        const cita = await Cita.findByIdAndUpdate(req.params.id, req.body,{ new: true});
        if(!cita){

            return res.status(404).send('Cita no encontrada');
        }

        res.json(cita)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error al modificar la cita');
    }
}


// Función eliminar citas

exports.eliminarCitas = async(req, res) => {

        try {
            
            let cita = await Cita.findById(req.params.id);
            if(!cita){
                res.status(404).send('Cita no encontrada');
            }else{
                await Cita.findOneAndDelete({_id: req.params.id});
                res.json({msg:"La cita ha sido eliminada "})
            }





        } catch (error) {
            console.log(error);
        res.status(500).send('Hubo un error al eliminar la cita');
        }






}