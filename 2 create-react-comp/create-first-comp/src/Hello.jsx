function Hello() {

    let myName = 'Prashant';
    let fullName = () =>{
        return 'Prashant Jain';
    }
    let number = 456;
    return <h3>
        Hello this is the future speaking. I am your master {myName} <br />
        Hello this is the future speaking. I am your master {fullName()} <br />
        MessageNo: {number} I am your master {fullName()}
        
    </h3>
}

export default Hello;