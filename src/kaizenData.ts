export interface Kaizen {
    id: number;
    title: string;
    target: string;
    content: string;
    result: string;
    added: string;  // date
    updated: string; // date
    author: string;
    updator: string;
}

/*
export interface Kaizens {
    items: Kaizen[];
}
*/

export const kaizenData: Kaizen[] = [
    {
        id: 0,
        title: "KAIZEN掲示板の再現方法",
        target: "同様の掲示板を苦労せずに作成できるようにする",
        content: "SharePointでKAIZENを置きたいサイト（例：PF事本 EM開C）の「サイトコンテンツ」を開く",
        result: "同様の掲示板の作成が容易になる",
        added: "2019-12-10",
        updated: "",
        author: "Hideki Sogabe",
        updator: "",
    },
    {
        id: 1,
        title: "GitでOffice文書の差分を見る",
        target: "GitでOffice文書の差分を見る",
        content: "【基本： Tikaの利用】",
        result: "Officeファイルも差分が表示され、比較が簡単になった。",
        added: "2019-12-11",
        updated: "",
        author: "Hideki Sogabe",
        updator: "",
    },
]