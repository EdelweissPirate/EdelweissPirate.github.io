import Card from "./shared/Card"

function Location({ locale }) {
    return (
        <Card styling={'sm:absolute sm:-bottom-9 sm:-right-12 sm:w-3/5 sm:p-2 md:p-1 text-2xl'}>
            <div >
                <div className='py-1 px-5 text-center sm:text-left' >
                    <p>{locale}</p>
                </div>
            </div>
        </Card>
    )
}

export default Location
