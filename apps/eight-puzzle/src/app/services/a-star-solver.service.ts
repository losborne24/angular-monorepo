import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AStarSolverService {
  expCount: number;
  openNodes: any[];
  closedNodes: { id: any; state: any[]; g: number }[];
  finalPath: string | any[];
  id: number | undefined;
  acceptableMoves = [
    [1, 3],
    [0, 2, 4],
    [1, 5],
    [0, 4, 6],
    [3, 1, 5, 7],
    [4, 2, 8],
    [3, 7],
    [6, 4, 8],
    [7, 5],
  ];

  solvePuzzle(initState: any) {
    this.expCount = 0;
    this.openNodes = [];
    this.closedNodes = [];
    this.id = 0;
    const initialState = initState;
    this.openNodes.push({
      id: this.id,
      prevNode: null,
      state: initialState,
      f: 0,
      g: 0,
    });
    const h = this.getManhattanDistance(initialState);
    if (h === 0) {
      this.finalPath = [initialState];
    } else {
      this.openNodes[0].f = h;
      this.getChildren(this.openNodes[0]);
    }
    return this.finalPath;
  }

  private getChildren(node: { id: any; state: any[]; g: number }) {
    let isComplete = false;
    this.closedNodes.push({ ...node });
    this.openNodes = this.openNodes.filter(
      (n: { id: any }) => n.id !== node.id
    );
    const emptyCell = node.state.indexOf(null);
    this.acceptableMoves[emptyCell].forEach((newPos) => {
      const newNode = { ...node, state: [...node.state] };
      newNode.state[emptyCell] = node.state[newPos];
      newNode.state[newPos] = null;
      const isStateClosed = this.closedNodes.find(
        (node: { state: any[] }) => node.state == newNode.state
      );
      const isStateOpen = this.openNodes.find(
        (node: { state: any[] }) => node.state == newNode.state
      );
      if (!isStateClosed && !isStateOpen) {
        const h = this.getManhattanDistance(newNode.state);
        const g = node.g + 1;
        this.id++;
        this.openNodes.push({
          id: this.id,
          prevNode: node.id,
          state: newNode.state,
          f: g + h,
          g: g,
        });
        if (h === 0) {
          isComplete = true;
          return this.getPath(this.openNodes[this.openNodes.length - 1]);
        }
      }
    });
    if (!isComplete) {
      this.selectNextNode();
    }
  }
  private selectNextNode() {
    let minNode = this.openNodes[0];
    this.openNodes.forEach((node: { f: number }) => {
      if (node.f < minNode.f) {
        minNode = node;
      }
    });
    this.expCount += 1;
    if (this.expCount > 3000) {
      this.finalPath = 'failed';
    } else {
      return this.getChildren(minNode);
    }
  }

  private getManhattanDistance(state: string | any[]) {
    let dist = 0;
    for (let i = 0; i < state.length; i++) {
      if (state[i] !== null) {
        const correctRow = i % 3;
        const currRow = state[i] % 3;
        dist += Math.abs(correctRow - currRow);
        dist += Math.abs(Math.floor(state[i] / 3) - Math.floor(i / 3));
      }
    }
    return dist;
  }
  private getPath(goalNode: { state: any; prevNode: any }) {
    this.finalPath = [goalNode.state];
    let prevNode = this.closedNodes.find(
      (node: { id: any }) => node.id === goalNode.prevNode
    );
    this.finalPath.unshift(prevNode.state);
    while (prevNode.prevNode) {
      prevNode = this.closedNodes.find(
        (node: { id: any }) => node.id === prevNode.prevNode
      );
      this.finalPath.unshift(prevNode.state);
    }
  }
}
