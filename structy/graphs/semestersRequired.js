const semestersRequired = (numCourses, prereqs) => {
    if(prereqs.length === 0) return 1;
    const graph = buildGraph(prereqs);
    const distance = {};
    for (const course in graph) {
      if(graph[course].length === 0) distance[course] = 1;
    }
    for (const course in graph) {
      checkSemesters(graph, course, distance);
    }
    return Math.max(...Object.values(distance));
  };
  
  const checkSemesters = (graph, course, distance) => {
    if (course in distance) return distance[course];
    let maxLength = 0;
    for (let prereq of graph[course]) {
      const length = checkSemesters(graph, prereq, distance);
      if(length > maxLength) maxLength = length;
    }
    distance[course] = maxLength + 1;
    return distance[course];
  }
  
  
  const buildGraph = (prereqs) => {
    const graph = {};
    for(let prereq of prereqs) {
      const [a,b] = prereq;
      if(!(a in graph)) graph[a] = [];
      if(!(b in graph)) graph[b] = [];
      graph[a].push(b);
    }
    return graph;
  }

  // given a list of prereqs, return the number of semesters needed to take all classes