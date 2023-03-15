import { TagsContainerStyle } from "./Style";

interface TagsProps{
    TagText: string
}

export function CardsTags({TagText}:TagsProps){
    return(
        <TagsContainerStyle>{TagText}</TagsContainerStyle>
    )
}