// See https://aka.ms/new-console-template for more information

using System.Linq.Expressions;
using Square;

var rectangle = new Rectangle();
var operations = new List<Action>();

while (true) 
{
    WriteChoiceMenu();
    var keyInfo = Console.ReadKey();
    Console.WriteLine();
    
    InputValues chosenInput;
    try
    {
        chosenInput = MapKeyToInputValuesEnum(keyInfo);
    }
    catch (InvalidDataException)
    {
        Console.WriteLine("Inputted value is invalid, please pick one from the menu");
        continue;
    }

    if (chosenInput == InputValues.Done)
    {
        ProcessInput();
        return;
    }
    
    var userInputNumberString = Console.ReadLine();
    Console.WriteLine();
    
    if (!double.TryParse(userInputNumberString, out var userInputNumber ))
        Console.WriteLine("Could not convert input to a number");
    
    switch (chosenInput)
    {
        case InputValues.AddLength:
            operations.Add(() => rectangle.AddLength(userInputNumber));
            break;
        case InputValues.AddWidth:
            operations.Add(() => rectangle.AddWidth(userInputNumber));
            break;
        case InputValues.ScaleUp:
            operations.Add(() => rectangle.ScaleUp(userInputNumber));
            break;
        default:
            throw new NotImplementedException($"{chosenInput} is not implemented");
    }
}


return;

void ProcessInput()
{
    foreach (var operation in operations)
    {
        operation();
        PrintWidthAndLength();
    }
}

void PrintWidthAndLength()
{
    var sizes = rectangle.GetSizesOfRectangle();
    Console.WriteLine($"Rectangle Width: {sizes.Width}");
    Console.WriteLine($"Rectangle Length: {sizes.Length} \n");
}

void WriteChoiceMenu()
{
    Console.WriteLine("Welcome to your new rectangle, enter the value of the operation you want to do");
    foreach (var enumKey in Enum.GetValues(typeof(InputValues)))
    {
        Console.WriteLine($"{(int)enumKey}: {enumKey}");
    }
}

InputValues MapKeyToInputValuesEnum(ConsoleKeyInfo keyInfo) => keyInfo.Key switch
{
    ConsoleKey.D0 => InputValues.AddLength,
    ConsoleKey.D1 => InputValues.AddWidth,
    ConsoleKey.D2 => InputValues.ScaleUp,
    ConsoleKey.D3 => InputValues.Done,
    _ => throw new InvalidDataException("Input out of range")
};