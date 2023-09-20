package main

import (
	"bufio"
	"fmt"
	"os"
	"strconv"
	"strings"
	"sync"
)

//var wg sync.WaitGroup
var wg = sync.WaitGroup{}

func main() {
	userInputs := make([]string, 5)
	reader := bufio.NewReader(os.Stdin)
	userInputs[0] = getUserInput("year", reader)
	userInputs[1] = getUserInput("month", reader)
	userInputs[2] = getUserInput("day", reader)
	userInputs[3] = getUserInput("hour", reader)
	userInputs[4] = getUserInput("minute", reader)

	ch := make(chan string, len(userInputs))
	wg.Add(5)

	go validateMinMaxInput(userInputs[0], "year", 0, 9999, ch)
	go validateMinMaxInput(userInputs[1], "month", 1, 12, ch)
	go validateMinMaxInput(userInputs[2], "day", 1, 31, ch)
	go validateMinMaxInput(userInputs[3], "hour", 1, 24, ch)
	go validateMinMaxInput(userInputs[4], "minute", 1, 60, ch)

	wg.Wait()
	close(ch)
	fmt.Scanln()
	fmt.Println("main finished")

}

func getUserInput(inputType string, reader *bufio.Reader) string {
	fmt.Printf("Enter %s: ", inputType)
	input, _ := reader.ReadString('\n')

	return input
}

//func validateMinMaxInput(input string, inputType string, min int, max int) (string, error) {
//	validInteger, err := strconv.Atoi(input)
//
//	if err != nil {
//		return "", errors.New(strings.Join([]string{"could not parse input for ", inputType}, ""))
//	}
//
//	if validInteger < min {
//		return "", errors.New(strings.Join([]string{"The provided value for ", inputType, " is too low"}, ""))
//	}
//
//	if validInteger > max {
//		return "", errors.New(strings.Join([]string{"The provided value for ", inputType, " is too high"}, ""))
//	}
//
//	return strings.Join([]string{"Correctly validated ", inputType}, ""), nil
//}

func validateMinMaxInput(input string, inputType string, min int, max int, ch chan string) {
	defer wg.Done()

	validInteger, err := strconv.Atoi(input)

	if err != nil {
		ch <- strings.Join([]string{"The provided value for ", inputType, " is too low"}, "")
	}

	if validInteger < min {
		ch <- strings.Join([]string{"The provided value for ", inputType, " is too low"}, "")
	}

	if validInteger > max {
		ch <- strings.Join([]string{"The provided value for ", inputType, " is too high"}, "")
	}
}
