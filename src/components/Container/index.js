import { ContainerStyle } from "./styled"

export const Container = ({children}) => {
    return(
        <ContainerStyle 
        radius={"20px"} 
        color={"#7A688C"}
        padding={"15px"}
        >{children}</ContainerStyle>
    )
}