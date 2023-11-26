const Footer = () => {
    // this will also be in a separate file
    const CurrentYear = new Date().getFullYear()
    return (
        <footer>
        <p>
            Copyright &copy; {CurrentYear}
            {/* to get the current year */}
        </p>
        </footer>
    )
}
export default Footer;