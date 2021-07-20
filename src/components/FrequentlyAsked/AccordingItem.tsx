import './FAQ.css';

interface AccordingItemProps {
    title: string;
    content: string;
    active: boolean; 
    expand(index: number): any;
    index: number;
}

const AccordingItem = ({ title, content, index, expand, active }: AccordingItemProps) => {

    return (
        <div className="accordion-item">
            <button id="accordion-button-1" onClick={() => expand(active ? 20 : index)} aria-expanded={active}><span className="accordion-title">{(title)}</span><span className="icon" aria-hidden="true"></span></button>
            <div className="accordion-content">
                <p>{content}</p>
            </div>
        </div>
    );
};

export default AccordingItem;