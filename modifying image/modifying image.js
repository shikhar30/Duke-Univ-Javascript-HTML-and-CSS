function pixelnearby(image,a,b,g)
{
    var dx=Math.random()*g;
    var dy=Math.random()*g;

    return image.getPixel(dx,dy);
}
var image=new SimpleImage("smalllion.jpg");// add the image link to be modified
var output=new SimpleImage(image.getWidth(),image.getHeight()); // creating a new similar image
for(var pixel of image.values())
{
    var x=pixel.getX();
    var y=pixel.getY();
    if(Math.random()>0.8)
    {
        var out=pixelnearby(image,x,y,10);
    if(y<5||y>image.getHeight-5) //changing the pixel color through height
    {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(0);
    }
    output.setPixel(x,y,out);

    }
    else{
        if(x<5||x>image.getWidth-5)// changing the pixel color through width
        {
        pixel.setRed(0);
        pixel.setGreen(0);
        pixel.setBlue(0);
        }
        output.setPixel(x,y,pixel);
    }
}
print(output);