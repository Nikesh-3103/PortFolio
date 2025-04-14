export default function Layout(props)
{
    const {children} = props

    const header = (
        <header>
            <div>
                <h1 className="text-gradient">CAFFINATE</h1>
                <p>For coffee initaites</p>
            </div>
            <button>
                <p>sign up for free</p>
                <i className="fa-solid fa-mug-saucer"></i>
            </button>
        </header>
    )
    const footer = (
        <footer>

        </footer>
    )
    return
    (
        <>
        {header}
        <main>
            {children}
        </main>
        {footer}
        </>
    )
}