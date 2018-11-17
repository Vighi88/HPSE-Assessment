package com.hpse.assessment.server.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ShortestPathService {

	public int N;
	public int START_NODE;
	public int FINISHED_STATE;

	private double[][] distance;
	private double minTourCost = Double.POSITIVE_INFINITY;

	private List<Integer> tour = new ArrayList<>();
	private boolean ranSolver = false;

	public ShortestPathService() {
		super();
	}

	public ShortestPathService(int startNode, double[][] distance) {
		this.distance = distance;
		N = distance.length;
		START_NODE = startNode;

		// Validate inputs.
		if (N <= 2)
			throw new IllegalStateException("TSP on 0, 1 or 2 nodes doesn't make sense.");
		if (N != distance[0].length)
			throw new IllegalArgumentException("Matrix must be square (N x N)");
		if (START_NODE < 0 || START_NODE >= N)
			throw new IllegalArgumentException("Starting node must be: 0 <= startNode < N");
		if (N > 32)
			throw new IllegalArgumentException(
					"Matrix too large! A matrix that size for the DP TSP problem with a time complexity of"
							+ "O(n^2*2^n) requires way too much computation for any modern home computer to handle");

		// The finished state is when the finished state mask has all bits are set to
		// one (meaning all the nodes have been visited).
		System.out.println("Statrt Finished STate");
		FINISHED_STATE = (1 << N) - 1;
		
		System.out.println("Statrt Finished STate" + FINISHED_STATE);
	}

	// Returns the optimal tour for the traveling salesman problem.
	public List<Integer> getTour() {
		if (!ranSolver)
			solve();
		return tour;
	}

	// Returns the minimal tour cost.
	public double getTourCost() {
		if (!ranSolver)
			solve();
		return minTourCost;
	}

	public void solve() {

		// Run the solver
		int state = 1 << START_NODE;
		Double[][] memo = new Double[N][1 << N];
		Integer[][] prev = new Integer[N][1 << N];
		minTourCost = tsp(START_NODE, state, memo, prev);

		// Regenerate path
		int index = START_NODE;
		while (true) {
			tour.add(index);
			Integer nextIndex = prev[index][state];
			if (nextIndex == null)
				break;
			int nextState = state | (1 << nextIndex);
			state = nextState;
			index = nextIndex;
		}
		tour.add(START_NODE);
		ranSolver = true;
	}

	private double tsp(int i, int state, Double[][] memo, Integer[][] prev) {

		// Done this tour. Return cost of going back to start node.
		if (state == FINISHED_STATE)
			return distance[i][START_NODE];

		// Return cached answer if already computed.
		if (memo[i][state] != null)
			return memo[i][state];

		double minCost = Double.POSITIVE_INFINITY;
		int index = -1;
		for (int next = 0; next < N; next++) {

			// Skip if the next node has already been visited.
			if ((state & (1 << next)) != 0)
				continue;

			int nextState = state | (1 << next);
			double newCost = distance[i][next] + tsp(next, nextState, memo, prev);
			if (newCost < minCost) {
				minCost = newCost;
				index = next;
			}
		}

		prev[i][state] = index;
		return memo[i][state] = minCost;
	}

	public String inputAnalyzer(double[][] distance, int noOfCities, int originCity) {

		// Create adjacency matrix
		int n = noOfCities;
		ShortestPathService solver = null;
		double[][] distanceMatrix = new double[n][n];
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				distanceMatrix[i][j] = distance[i][j];
				// Run the solver
				solver = new ShortestPathService(originCity, distanceMatrix);
			}
		}
				// Prints: [0, 3, 2, 4, 1, 5, 0]
				System.out.println("Tour: " + solver.getTour());

				// Print: 42.0
				System.out.println("Tour cost: " + solver.getTourCost());

String shortestPath = "Shortest Travel Path: "+ solver.getTour() +" Shortest Travel Cost: " + solver.getTourCost();
		return shortestPath;
	}
}