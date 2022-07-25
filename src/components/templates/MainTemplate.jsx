import Head from "next/head";
import Navbar from "../navbar/Navbar"

const MainTemplate = ({children, title}) => {
    return (
        <>
            <Head>
                <title>Yovanna Torres Mendoza | {title}</title>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="description" content="Next.js example" />
            </Head>
            <Navbar />
            {children}
        </>
    );
}

MainTemplate.defaultProps = {
    title: "Asesora comercial"
}

export default MainTemplate;