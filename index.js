module.exports = function ThiccPlayers(dispatch) {
    
    // 1 = -3, 4 = +0, 7 = +3
    const GrowSize  = 4; // height
    const ThighSize = 7;
    const ChestSize = 7;
    
    const GROW_ID  = 7000005;
    const THIGH_ID = 7000014;
    const CHEST_ID = 7000012;
    
    dispatch.hook('S_SPAWN_USER', 13, (event) => {
        //applyChange(event.gameId, GROW_ID, GrowSize);
        applyChange(event.gameId, THIGH_ID, ThighSize);
        applyChange(event.gameId, CHEST_ID, ChestSize);
    })    

    dispatch.hook('S_LOGIN', 10, (event) => {
        //applyChange(event.gameId, GROW_ID, GrowSize);
        applyChange(event.gameId, THIGH_ID, ThighSize);
        applyChange(event.gameId, CHEST_ID, ChestSize);
    })

    function applyChange (cid, sid, stack){
        dispatch.toClient('S_ABNORMALITY_END', 1, {
                    target: cid,
                    id: sid,
                });	
        
        setTimeout(()=> {
            dispatch.toClient('S_ABNORMALITY_BEGIN', 2, {
                target: cid,
                    source: cid,
                    id: sid,
                    duration: 864000000,
                    unk: 0,
                    stacks: stack,
                    unk2: 0
                });
        }, 1000);
    }
    
}
