import mongoosse,{Schema} from 'mongoose';

const productoSchema = new Schema({
    nombre: {type:String, maxlength:50, unique:true},
    precio: {type:Number},
    stock: {type:Number},
    Descripcion: {type:String, maxlength:200},
    Categoria: {type:String, maxlength:50},
    Genero: {type:String, maxlength:30},
    Temporada: {type:String, maxlength:30},
    estado: {type:Number, default:1}
});

const Producto = mongoosse.model('Producto',productoSchema);

export default Producto;