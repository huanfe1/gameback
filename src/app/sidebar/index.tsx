import { Button } from '@nextui-org/react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { useStoreGames } from '@/lib/store';

import AddGame from './add_game';

export default function Sidebar() {
    const navigate = useNavigate();
    const { games, refresh } = useStoreGames(state => state);
    useEffect(() => refresh, []);
    return (
        <div className="flex h-[768px] w-64 flex-col border-r border-default-100">
            <div className="font-blod p-3 text-xl" onClick={() => navigate('/')}>
                游戏
            </div>
            <div className="flex flex-col overflow-y-scroll">
                {Object.keys(games).map(game => (
                    <Button
                        key={game}
                        className="mx-2 my-1 flex-none rounded bg-default-100 hover:bg-default-200"
                        onPress={() => navigate('/game/' + game)}
                    >
                        {games[game].name}
                    </Button>
                ))}
            </div>
            <div className="mt-4 flex-1">
                <AddGame />
            </div>
        </div>
    );
}
