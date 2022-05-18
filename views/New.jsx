const React = require('react')

module.exports = class New extends React.Component {
    render() {
        return (
            <>
                <h1>Create Fruit Page</h1>
                <form action="/fruits" method="POST">
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name"/>
                    <label htmlFor="color">Color:</label>
                    <input type="text" id="color" name="color"/>
                    <label htmlFor="readyToEat">Ready to eat:</label>
                    <input type="checkbox" id="readyToEat" name="readyToEat"/>
                    <input type="submit" value="Create Fruit"/>
                </form>
            </>
        )
    }
}