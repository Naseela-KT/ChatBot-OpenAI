import { OpenAI } from "openai";

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true,
});

export const createThread = async () => {
  try {
    const emptyThread = await openai.beta.threads.create();
    return emptyThread;
  } catch (error) {
    console.log(error)
  }
};

export const getChatResponse = async (message, threadId) => {
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "assistant",
          content:
            '{"instanceArn":"arn:aws:ec2:us-east-1:428386112705:instance\\/i-0cfa7f4d986bcae32","accountId":"428386112705","instanceName":"mbe-db-p03","currentInstanceType":"r5d.8xlarge","finding":"OVER_PROVISIONED","findingReasonCodes":["CPUOverprovisioned","MemoryOverprovisioned","EBSIOPSOverprovisioned","EBSThroughputOverprovisioned","NetworkBandwidthOverprovisioned","NetworkPPSOverprovisioned","DiskIOPSOverprovisioned","DiskThroughputOverprovisioned"],"utilizationMetrics":[{"name":"CPU","statistic":"MAXIMUM","value":7.068333333333333},{"name":"MEMORY","statistic":"MAXIMUM","value":4.449782848358154},{"name":"EBS_READ_OPS_PER_SECOND","statistic":"MAXIMUM","value":124.85},{"name":"EBS_WRITE_OPS_PER_SECOND","statistic":"MAXIMUM","value":1206.2},{"name":"EBS_READ_BYTES_PER_SECOND","statistic":"MAXIMUM","value":3883797.2005208335},{"name":"EBS_WRITE_BYTES_PER_SECOND","statistic":"MAXIMUM","value":12398543.294270834},{"name":"NETWORK_IN_BYTES_PER_SECOND","statistic":"MAXIMUM","value":2375764.05},{"name":"NETWORK_OUT_BYTES_PER_SECOND","statistic":"MAXIMUM","value":92952.83333333333},{"name":"NETWORK_PACKETS_IN_PER_SECOND","statistic":"MAXIMUM","value":1647.8166666666666},{"name":"NETWORK_PACKETS_OUT_PER_SECOND","statistic":"MAXIMUM","value":824.6},{"name":"NETWORK_THROUGHPUT_DAILY_BYTE","statistic":"MAXIMUM","value":2955276395},{"name":"DISK_READ_OPS_PER_SECOND","statistic":"MAXIMUM","value":0.06666666666666667},{"name":"DISK_WRITE_OPS_PER_SECOND","statistic":"MAXIMUM","value":0},{"name":"DISK_READ_BYTES_PER_SECOND","statistic":"MAXIMUM","value":34.13333333333333},{"name":"DISK_WRITE_BYTES_PER_SECOND","statistic":"MAXIMUM","value":0}],"lookBackPeriodInDays":14,"recommendationOptions":[{"instanceType":"i3en.xlarge","projectedUtilizationMetrics":[{"name":"CPU","statistic":"MAXIMUM","value":52.85884057971015},{"name":"MEMORY","statistic":"MAXIMUM","value":35.598262786865234}],"platformDifferences":[],"performanceRisk":1,"rank":1,"savingsOpportunity":{"savingsOpportunityPercentage":85.347,"estimatedMonthlySavings":{"currency":"USD","value":4745}},"migrationEffort":"VeryLow","savingsOpportunityAfterDiscounts":{"savingsOpportunityPercentage":85.607,"estimatedMonthlySavings":{"currency":"USD","value":3861.965}}},{"instanceType":"i4i.2xlarge","projectedUtilizationMetrics":[{"name":"CPU","statistic":"MAXIMUM","value":21.052005772005767},{"name":"MEMORY","statistic":"MAXIMUM","value":17.799131393432617}],"platformDifferences":[],"performanceRisk":1,"rank":2,"savingsOpportunity":{"savingsOpportunityPercentage":73.556,"estimatedMonthlySavings":{"currency":"USD","value":4089.46}},"migrationEffort":"VeryLow","savingsOpportunityAfterDiscounts":{"savingsOpportunityPercentage":73.595,"estimatedMonthlySavings":{"currency":"USD","value":3320.101}}},{"instanceType":"i3en.2xlarge","projectedUtilizationMetrics":[{"name":"CPU","statistic":"MAXIMUM","value":26.86747697974217},{"name":"MEMORY","statistic":"MAXIMUM","value":17.799131393432617}],"platformDifferences":[],"performanceRisk":1,"rank":3,"savingsOpportunity":{"savingsOpportunityPercentage":70.693,"estimatedMonthlySavings":{"currency":"USD","value":3930.32}},"migrationEffort":"VeryLow","savingsOpportunityAfterDiscounts":{"savingsOpportunityPercentage":71.218,"estimatedMonthlySavings":{"currency":"USD","value":3212.836}}}],"recommendationSources":[{"recommendationSourceArn":"arn:aws:ec2:us-east-1:428386112705:instance\\/i-0cfa7f4d986bcae32","recommendationSourceType":"Ec2Instance"}],"lastRefreshTimestamp":"2024-07-13T19:14:59+00:00","effectiveRecommendationPreferences":{"cpuVendorArchitectures":["CURRENT"],"enhancedInfrastructureMetrics":"Inactive","inferredWorkloadTypes":"Active","lookBackPeriod":"DAYS_14","utilizationPreferences":[{"metricName":"CpuUtilization","metricParameters":{"threshold":"P99_5","headroom":"PERCENT_20"}},{"metricName":"MemoryUtilization","metricParameters":{"headroom":"PERCENT_10"}}],"preferredResources":[{"name":"Ec2InstanceTypes","includeList":["*"]}],"savingsEstimationMode":{"source":"CostOptimizationHub"}},"inferredWorkloadTypes":["SQLServer"],"instanceState":"running","tags":[{"key":"map-migrated","value":"d-server-022cukxv2llxb7"},{"key":"daily_backup","value":"true"},{"key":"environment","value":"prod"},{"key":"role","value":"sql_server"},{"key":"Patch Group","value":"WIN_PROD_1"},{"key":"domain","value":"mbe.local"},{"key":"project","value":"aws_migration"},{"key":"sql_cluster","value":"mbe-sql-clus2"},{"key":"terraform","value":"true"},{"key":"MaintenanceWindow","value":"ThirdSaturday12AM-3AM"},{"key":"created_by","value":"Sean Meadows"},{"key":"Name","value":"mbe-db-p03"}],"externalMetricStatus":{"statusCode":"NO_EXTERNAL_METRIC_SET","statusReason":"You haven\'t configured an external metrics provider in Compute Optimizer."},"idle":"False"}',
        },
        ...(threadId
          ? [{ role: "user", content: message, name: threadId }]
          : [{ role: "user", content: message }]),
      ],
    });

    console.log(response);
    return response.choices[0].message.content;
  } catch (error) {
    console.log(error);
  }
};
