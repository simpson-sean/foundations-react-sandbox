import MyItem from 'MyItem'

export default class Body extends Component {
    render() {
        return (
            <main>
                <section className="main-section">
                    <h2>{props.title}</h2>
                    { words.map(someText => <MyItem text={someText} />) }
                </section>
            </main>
        )
    }
}
