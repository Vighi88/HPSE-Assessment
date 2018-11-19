package com.hpse.assessment.server.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

@Service
public class ShortestPathService {

	public int noOfCities, originCity, EndStatus;

	private double[][] distance;
	private double minTourCost = Double.POSITIVE_INFINITY;

	private List<Integer> tour = new ArrayList<>();
	private boolean ranSolver = false;

	public ShortestPathService() {
		super();
	}

	public ShortestPathService(int startNode, double[][] distance) {
		this.distance = distance;
		noOfCities = distance.length;
		originCity = startNode;

		// Validate inputs.
		if (noOfCities <= 2)
			throw new IllegalStateException("The minimum number of cities to calculate shortest path is 3");
		if (noOfCities != distance[0].length)
			throw new IllegalArgumentException("Mismatch in the input data and the number of cities count");
		if (originCity < 0 || originCity >= noOfCities)
			throw new IllegalArgumentException("Origin City should be lesser than number of cities ");
		if (noOfCities > 32)
			throw new IllegalArgumentException(
					"Matrix too large! A matrix that size for the DP TSP problem with a time complexity of"
							+ "O(n^2*2^n) requires way too much computation for any modern home computer to handle");

		// To identify whether all nodes have been visited.
		EndStatus = (1 << noOfCities) - 1;
	}

	// It will return the OPTIMAL path for traveling cities.
	public List<Integer> getTour() {
		if (!ranSolver)
			solve();
		return tour;
	}

	// It will return the minimal cost of the path for traveling cities.
	public double getTourCost() {
		if (!ranSolver)
			solve();
		return minTourCost;
	}

	public void solve() {

		// Run the solver
		int state = 1 << originCity;
		Double[][] memo = new Double[noOfCities][1 << noOfCities];
		Integer[][] prev = new Integer[noOfCities][1 << noOfCities];
		minTourCost = hpseAssessment(originCity, state, memo, prev);

		// Regenerate path
		int index = originCity;
		while (true) {
			tour.add(index);
			Integer nextIndex = prev[index][state];
			if (nextIndex == null)
				break;
			int nextState = state | (1 << nextIndex);
			state = nextState;
			index = nextIndex;
		}
		tour.add(originCity);
		ranSolver = true;
	}

	private double hpseAssessment(int i, int state, Double[][] memo, Integer[][] prev) {

		// Return weightage of going back to start node.
		if (state == EndStatus)
			return distance[i][originCity];

		// Return the cached data if already computed.
		if (memo[i][state] != null)
			return memo[i][state];

		double minCost = Double.POSITIVE_INFINITY;
		int index = -1;
		for (int next = 0; next < noOfCities; next++) {

			// Skip if the next node since it has already been visited.
			if ((state & (1 << next)) != 0)
				continue;

			int nextState = state | (1 << next);
			double newCost = distance[i][next] + hpseAssessment(next, nextState, memo, prev);
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
		ShortestPathService pathResolver = null;
		double[][] distanceMatrix = new double[n][n];
		for (int i = 0; i < n; i++) {
			for (int j = 0; j < n; j++) {
				distanceMatrix[i][j] = distance[i][j];
				// Run the solver
				pathResolver = new ShortestPathService(originCity, distanceMatrix);
			}
		}

String shortestPath = "Shortest Travel Path: "+ pathResolver.getTour() +" Shortest Travel Cost: " + pathResolver.getTourCost();
		return shortestPath;
	}
}