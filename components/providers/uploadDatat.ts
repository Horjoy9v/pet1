// createCommit.ts

interface CommitData {
  message: string;
  content: string;
  branch: string;
}

const createCommit = async (
  accessToken: string,
  owner: string,
  repo: string,
  commitData: CommitData
): Promise<void> => {
  const { message, content, branch } = commitData;

  // Отримання вмісту файлу JSON для оновлення
  const url = `https://api.github.com/repos/Horjoy9v/test-db/contents/blob/main/db.json`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${"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"}`,
    },
  });
  const fileContent = await response.json();

  // Оновлення вмісту файлу з урахуванням нових даних

  // Створення об'єкта для відправки запиту на створення коміту
  const commitRequestBody = {
    message: message,
    content: Buffer.from(JSON.stringify(content)).toString("base64"),
    branch: branch,
  };

  // Відправка POST-запиту на створення коміту
  await fetch(`https://api.github.com/repos/${owner}/${repo}/commits`, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${"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"}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(commitRequestBody),
  });
};

export default createCommit;
