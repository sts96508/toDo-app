export function Tabs(props) {
  const { todos, selectedTab, setSelectedTab } = props;
  const tabs = ["All", "Open", "Completed"];
  return (
    <nav className="tab-container">
      {tabs.map((tab, tabIndex) => {
        const numOfTasks = todos.length;
        const openTasks = todos.filter((val) => !val.complete).length;
        const completedTasks = todos.filter((val) => val.complete).length;
        const taskCount =
          tab === "All"
            ? numOfTasks
            : tab === "Open"
            ? openTasks
            : completedTasks;
        return (
          <button onClick={() => {
            setSelectedTab(tab)
          }} key={tabIndex} className={"tab-button "
            + (tab === selectedTab ? 'tab-selected' : ' ')
          }>
            <h4>
              {tab}
              <span>({taskCount})</span>
            </h4>
          </button>
        );
      })}
      <hr />
    </nav>
  );
}
