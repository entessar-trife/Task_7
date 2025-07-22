export interface CardComponentProps {
    cardStyle?:string
    contentStyle?: string;
    img: string;
    title: string;
    titleStyle?: string;
    price?: string;
    info?: Info[];
    desc?: string;
}

interface Info {
    icon: string;
    txt: string;
}