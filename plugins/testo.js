/**
by Tio 
hapus yapit😹
**/

 [ *`DYTOPIA`* ]

async function dytopia(query) {
    try {
        const response = await axios.post('https://boredhumans.com/apis/boredagi_api.php',
            `prompt=${query}&uid=lwle4nyomx5t0w6quo8&sesh_id=multistep-82cb1e26-d257-4dd0-b34b-1d35af1c712d&get_tool=false&tool_num=23`, {
                headers: {
                    'User-Agent': 'Googlebot-News',
                }
            });
        return response.data
    } catch (e) {
        return e
    }
}
