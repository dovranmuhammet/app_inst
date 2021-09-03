import { createSignal, onMount, For } from "solid-js";

export default function () {
  const [unfollowers, setUnfollowers] = createSignal([]);

  onMount(() => {
    chrome.action.setBadgeText({ text: "" });
    chrome.runtime.sendMessage({ action: "unfollowersCache" }, (response) => {
      console.log("response :>> ", response);
      if (!!response) setUnfollowers(response);
    });
  });

  const getUnfollowers = (e) => {
    const btn = e.target;
    btn.disabled = true;
    chrome.runtime.sendMessage({ action: "getUnfollowers" }, (response) => {
      setUnfollowers(response);
      if (!!response) {
        btn.disabled = false;
      }
    });
  };

  return (
    <>
      <div>
        <section>
          <button className="btn" onClick={(e) => getUnfollowers(e)}>
            <p>Get Unfollowers</p>
          </button>
        </section>
      </div>
      <br />
      <div>
        <ul>
          <For each={unfollowers()}>
            {(f) => (
              <li>
                <a
                  className="link"
                  target="_blank"
                  href={`https://instagram.com/${f.username}`}
                >
                  <img
                    src={f.profile_pic_url}
                    crossorigin="anonymous"
                    alt={f.full_name}
                  />

                  <p className="user_name">
                    {f.username} {!!f.full_name ? `: ` + f.full_name : ""}
                  </p>
                </a>
              </li>
            )}
          </For>
        </ul>
      </div>
    </>
  );
}
