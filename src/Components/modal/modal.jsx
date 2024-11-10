import '../modal/modal.scss'

export default function Modal( { onClose } ){
    return(
        <section className="modal-container">
            
            <span class="iwwa--close" onClick={onClose}></span>
        </section>
    )
}