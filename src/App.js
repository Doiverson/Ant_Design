import React, {useState} from 'react';
import { Button, DatePicker, message, Alert } from 'antd';

import Table from './Table';

function App() {
    const [date, setDate] = useState(null);
    const handleChange = value => {
        message.info(`Selected Date: ${value ? value.format('YYYY-MM-DD') : 'None'}`);
        setDate(value);
    };
    return (
        <div style={{ width: 400, margin: '100px auto' }}>
            <DatePicker onChange={handleChange} />
            <div style={{ marginTop: 16 }}>
                <Alert message="Selected Date" description={date ? date.format('YYYY-MM-DD') : 'None'} />
            </div>
            <Child1/>
            <div style={{marginTop: 20}}/>
            <Table/>
        </div>
    );
}

export default App;


class Child1 extends React.Component {

    state = {
        loadings: [],
    };

    enterLoading = index => {
        this.setState(({ loadings }) => {
            const newLoadings = [...loadings];
            newLoadings[index] = true;

            return {
                loadings: newLoadings,
            };
        });
        setTimeout(() => {
            this.setState(({ loadings }) => {
                const newLoadings = [...loadings];
                newLoadings[index] = false;

                return {
                    loadings: newLoadings,
                };
            });
        }, 6000);
    };

    render() {
        const { loadings } = this.state;
        return(
            <Button className="test" type="primary" loading={loadings[0]} onClick={() => this.enterLoading(0)}>
                Click me!
            </Button>
        )
    }
}
