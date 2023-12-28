const style = {
    width: '100%'
}

export interface CardProps {
    children:any
}

export const Card: React.FC<CardProps> = ({children }) => {


    return (
        <div style={{ ...style }}>
            {children}
        </div>
    )
}
