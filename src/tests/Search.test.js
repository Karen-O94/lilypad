import { render, screen} from "@testing-library/react";
import SearchBar from "../components/SearchBar";
//import Results from "../pages/Results";
import userEvent from "@testing-library/user-event";

//tests input form
describe("input control", () => {
    test("Should get input element by test id", () => {
        render (<SearchBar/>)
    
        const input = screen.getByTestId("city-input");
        expect(input).toBeInTheDocument();
    })
    
    test("add valid city input", () => {
        render (<SearchBar/>)
        const input = screen.getByTestId("city-input");
        userEvent.type(input, "paris");
    
        expect(input).toHaveDisplayValue("paris")
    })
});

// //Tests button click to render city results
// describe("Search button control", () =>{
//     const showResults = render (<Results/>)
//     let onClickVal;
//     it("clicks the button",() => {
//         showResults();
//         userEvent.click(screen.getByTestId("city=btn"))

//     })
// })




// describe("Weather", () => {
//   it("Should return initial data from Weather json", async () => {
//     const { result } = renderHook(() => Weather());
//     const { temperature, humidity } = result.current;

//     expect(temperature).toBe(Number);
//     expect(humidity).toBe(Number);
//   });
// });

// describe("When data from APi is fetched successfullly", () => {
//   let mockedWeatherData;

//   beforeEach(() => {
//     mockedWeatherData = [
//       {
//         current: {
//           clouds: 0,
//           dew_point: 285.12,
//           dt: 1685211176,
//           feels_like: 296.08,
//           humidity: 49,
//           pressure: 1019,
//           sunrise: 1685159766,
//           sunset: 1685216378,
//           temp: 296.42,
//         },
//       },
//     ];

//     global.fetch.mockedResolvedResponse({
//       json: jest.fn().mockedResolvedResponse(mockedWeatherData),
//     });
//   });

//   it("should return data", async () => {
//     const { result } = renderHook(() => Weather());

//     await waitFor(() =>
//       expect(result.current).toEqual({
//         data: mockedWeatherData,
//       })
//     );
//   });
// });

