
export interface IApplyColor {
    parent: HTMLElement | any
    element:  HTMLElement | any
}

export const applyColor = ({parent, element}:IApplyColor) => {
    var count = parent.childElementCount;
    if((count + 1) % 3 === 0)
    element.style.color = "red";
} 