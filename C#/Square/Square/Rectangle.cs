namespace Square;

public class Rectangle
{
    private double _length = 0;

    private double _width = 0;

    private double _scalingFactor = 1;

    public void AddWidth(double width) => _width += width;
    
    public void AddLength(double length) => _length += length;

    public void ScaleUp(double scalingFactor) => _scalingFactor = scalingFactor;

    public (double Length, double Width) GetSizesOfRectangle() => new(_length * _scalingFactor, _width * _scalingFactor);


}