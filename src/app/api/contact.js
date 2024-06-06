export default async (res ,request) => {
    // const res = await fetch('https://api.github.com/users/joseph-garcia');
    // const data = await res.json();
    // return data;


    if(request.method === 'POST'){
        const{name, email, message} = request.body;

        if( !name || !email || !message){
            return res.status(400).json({message: 'Please fill all the fields'});
        }
        //return res.status(200).json({message: 'Success'});
        return res.redirect(303, '/api/contact');
    }

    return res.status(200).json({message: 'Invalid'});
};