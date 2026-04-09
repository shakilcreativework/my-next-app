import Link from "next/link";

const UsersPage = async () => {
    // data fetching way 1
    // const res = await fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json());

    // data fetching way 2
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await res.json();
    console.log(users);

    // {
    //     "id": 1,
    //         "name": "Leanne Graham",
    //             "username": "Bret",
    //                 "email": "Sincere@april.biz",
    //                     "address": {
    //         "street": "Kulas Light",
    //             "suite": "Apt. 556",
    //                 "city": "Gwenborough",
    //                     "zipcode": "92998-3874",
    //                         "geo": {
    //             "lat": "-37.3159",
    //                 "lng": "81.1496"
    //         }
    //     },
    //     "phone": "1-770-736-8031 x56442",
    //         "website": "hildegard.org",
    //             "company": {
    //         "name": "Romaguera-Crona",
    //             "catchPhrase": "Multi-layered client-server neural-net",
    //                 "bs": "harness real-time e-markets"
    //     }
    // }

    return (
        <div>
            <h2>Users are coming here</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {
                    users.map(user => <div key={user.id} className="card bg-primary text-primary-content">
                        <div className="card-body">
                            <h2 className="card-title">{user.name}</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            <div className="card-actions justify-end">
                                <Link href={`/users/${user.id}`}>
                                <button className="btn">Show info</button>
                                </Link>
                            </div>
                        </div>
                    </div>)
                }
            </div>
        </div>
    );
};

export default UsersPage;