import {Contador} from "./Contador";
import {useState} from "react";
import {Button, Layout, Table} from 'antd';
import {AppContainer} from "./App.style.tsx";


const {Content} = Layout;

//TODO ACESSIBILIDADE ARIA
function App() {
    const [ativo, setAtivo] = useState(false)
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];

    const columns = [
        {
            title: 'Nome',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Idade',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Endereço',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    const changeAtivo = () => setAtivo(!ativo)
    return (
            <AppContainer className="App">

                    <Button type="primary" onClick={changeAtivo}>{ativo ? 'sumir' : 'mostrar'}</Button>
                    {ativo && (<Contador title={'Teste'}> </Contador>)}


                <Table dataSource={dataSource} columns={columns} />
            </AppContainer>
    )
}

export default App
