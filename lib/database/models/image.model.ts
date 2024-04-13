import {Schema, model, models,Document} from 'mongoose';



export interface IImage extends Document{
    title: string;
    transformationType: string;
    publicId: string;
    secureURL: URL;
    width?: number;
    innerHeight?: number;
    config?: object;
    transformationUrl?: URL;
    aspectRatio?: string;
    color?: string;
    prompt?: string;
    author?: {
        _id: string;
        firstName: string;
        lastName: string;
    };
    // Assuming the author is represented by their ID
    createdAt?: Date;
    updatedAt?: Date;
}


const ImageSchema = new Schema({
    title:{type:String,required:true},
    transformationType:{type:String,required:true},
    publicId:{type:String,required:true},
    secureURL:{type:String,required:true},
    width:{type:Number},
    innerHeight:{type:Number},
    config:{type:Object},
    transfromationUrl:{type:String},
    aspectRatio:{type:String},
    color:{type:String},
    prompt :{type:String},
    author:{type:Schema.Types.ObjectId,ref:'User'},
    createdAt:{type:Date,default:Date.now},
    updatedAt:{type:Date,default:Date.now}
});

const Image = models.Image|| model('Image',ImageSchema);

export default Image;