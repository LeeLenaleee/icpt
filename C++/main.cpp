#include <iostream>
#include <set>
#include <map>
#include <format>

using namespace std;

void print(string message)
{
    cout << message;
}

void println(string message)
{
    cout << message << endl;
}

string getUserInput(string message)
{
    string input;
    do{
        print(message);
        getline(cin, input);

        if (input != "")
            return input;

        println("Geen input gegeven");
    } while (true);
}

const map<string, int> daysInMonths = {
        {"januari", 31},
        {"februari", 28},
        {"maart", 31},
        {"april", 30},
        {"mei", 31},
        {"juni", 30},
        {"juli", 31},
        {"augustus", 31},
        {"september", 30},
        {"oktober", 31},
        {"november", 30},
        {"december", 31},
};

string getMonthInput(string message)
{
    string res;
    do
    {
        res = getUserInput(message);

        if (daysInMonths.find(res) != daysInMonths.end())
            return res;
    } while (true);
}

int getNumberUserInput(string message)
{
    int res = -1;
    do
    {
        string input = getUserInput(message);
        try
        {
            res = stoi(input);
        }
        catch (const invalid_argument &e)
        {
            println("Ongeldig getal voor input");
        }
    } while (res == -1);

    return res;
}

int getMinMaxInput(string message, int min, int max)
{
    int res;
    do
    {
        res = getNumberUserInput(message);

        if (res >= min && res <= max)
            return res;
    } while (true);
}

int main() {
    int year;
    string month;
    int day;
    int hour;
    int minute;

    year = getMinMaxInput("Enter valid year: ", 0, 9999);
    month = getMonthInput("Enter valid month: ");
    day = getMinMaxInput("Enter valid day for month: ", 1, daysInMonths.at(month));
    hour = getMinMaxInput("Enter valid hour: ", 1, 24);
    minute = getMinMaxInput("Enter valid minute: ", 1, 60);

    print("Correctly filled in everything");

    return 0;
}


