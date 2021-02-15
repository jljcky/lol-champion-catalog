export const getLatestVersion = async () => {
    const res = await fetch("https://ddragon.leagueoflegends.com/api/versions.json")
    const data = await res.json();

    if (!data) {
        return null;
    }

    return data[0];
}

export const getAllChampionData = async () => {
    const latestVersion = await getLatestVersion();

    const res = await fetch(`http://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`);
    const data = await res.json();

    if (!data) {
        return null;
    }

    return Object.values(data.data);
}

export const getAllChampionIds = async () => {
    const latestVersion = await getLatestVersion();

    const res = await fetch(`http://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion.json`);
    const data = await res.json();

    if (!data) {
        return null;
    }

    return (Object.values(data.data)).map((champion) => (
        {
            params: {
                id: champion.id
            }
        }
    ));
}

export const getChampionData = async (id) => {
    const latestVersion = await getLatestVersion();
    const res = await fetch(`http://ddragon.leagueoflegends.com/cdn/${latestVersion}/data/en_US/champion/${id}.json`);
    const data = await res.json();

    if (!data) {
        return null;
    }

    return data.data[id];
}