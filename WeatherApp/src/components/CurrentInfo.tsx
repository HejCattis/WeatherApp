import "../style/CurrentInfo.css"

interface CurrentInfoProps {
    current : {
        title: string;
        desc: string | number | undefined;
        icon: React.ReactNode;
    }[];
  }
  

function CurrentInfo ({current}:CurrentInfoProps) {
    const renderedCurrent = current.map((item) => {

        return (
            <div key={item.title} className="item-container">
                <p className="item-title">{item.title}</p>
                <p className="item-desc">{item.desc}</p>
                <div>{item.icon}</div>
            </div>
        )
    })


    return (
        <div className="current-container">
            {renderedCurrent}
        </div>
    )
}

export default CurrentInfo